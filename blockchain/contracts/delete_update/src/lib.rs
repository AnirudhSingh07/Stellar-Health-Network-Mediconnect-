#![no_std]
use soroban_sdk::{contract, contractimpl, log, symbol_short, Env, Symbol, String, map};

struct Student {
    name: String,
    roll_number: u32,
}

const USER: Symbol = symbol_short!("USER");

#[contract]
pub struct VoteContract;

#[contractimpl]
impl VoteContract {
    pub fn RegisterUser(env: Env, user: String, password: String) {
        let mut student_storage: HashMap<u32, Student> = HashMap::new();

        let student = Student {
            name: user.to_string(),
            roll_number: password,
        };

        let time = env.ledger().timestamp();
        student_storage.insert(student.roll_number, student);
        log(&env, "User registered: {}", user);
    }

    // Create user function
    pub fn CreateUser(env: Env, user: String, password: String) {
        let mut student_storage: HashMap<u32, Student> = HashMap::new();

        let student = Student {
            name: user.to_string(),
            roll_number: password,
        };

        student_storage.insert(student.roll_number, student);
        log(&env, "New user created: {}", user);
    }

    // Delete user function
    pub fn DeleteUser(env: Env, roll_number: u32) {
        let mut student_storage: HashMap<u32, Student> = HashMap::new(); // Assuming storage is accessible here

        if let Some(_) = student_storage.remove(&roll_number) {
            log(&env, "User deleted successfully with roll number: {}", roll_number);
        } else {
            log(&env, "No user found with roll number: {}", roll_number);
        }
    }

    // Login function remains unchanged
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