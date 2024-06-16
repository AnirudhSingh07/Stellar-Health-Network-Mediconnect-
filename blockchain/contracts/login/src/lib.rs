#![no_std]
use soroban_sdk::{contract, contractimpl, log, symbol_short, Env, Symbol, String, map};

struct Student {
    name: String,
    roll_number: u32,
}

const USER: Symbol = symbol_short!("USER");

#[contract]
pub struct LoginUserContract;

#[contractimpl]
impl LoginUserContract {
    pub fn RegisterUser(env: Env, user: String, password: String) {
        let mut student_storage: HashMap<u32, Student> = HashMap::new();

        let student = Student {
            name: user.to_string(),
            roll_number: password,
        };

        let time = env.ledger().timestamp();
        student_storage.insert(student.roll_number, student);
        log(&env, "User: {}", user);
    }

    // Login function
    pub fn LoginUser(env: Env, roll_number: u32) -> bool {
        let mut student_storage: HashMap<u32, Student> = HashMap::new(); // Assuming storage is accessible here

        if let Some(student) = student_storage.get(&roll_number) {
            log(&env, "Login successful for user: {}", student.name);
            true
        } else {
            log(&env, "Login failed for user with roll number: {}", roll_number);
            false
        }
    }
}