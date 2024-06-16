#![no_std]
use soroban_sdk::{contract, contractimpl, log, symbol_short, Env, Symbol,String,map};

struct Student {
    name: String,
    roll_number: u32,
}

const USER: Symbol = symbol_short!("USER");

#[contract]
pub struct RegisterUserContract;

#[contractimpl]
impl RegisterUserContract{
    pub fn RegisterUser(env:Env,user:String, password:String){

let mut student_storage: HashMap<u32, Student> = HashMap::new();

        let student = Student {
        name: user.to_string(),
        roll_number: password,
    };

        
        let time = env.ledger().timestamp();
        // env.storage().instance().set(&USER, &user);
        // env.storage().instance().set(&password, &password);
        student_storage.insert(student.roll_number, student);
        log!(&env,"User:{}",user);
        
    }
}