#![no_std]
use soroban_sdk::{contract, contracttype, contractimpl, Env, Symbol, symbol_short, log, vec, Vec};

#[contracttype]
#[derive(Clone)]
pub struct MedicalRecord {
    pub disease: Symbol,
    pub medications: Vec<Symbol>,
    pub doctor_name: Symbol,
    pub date: u64,
}

const MEDICAL_HISTORY: Symbol = symbol_short!("HISTORY");

#[contracttype]
pub enum HistoryKey {
    Record(Symbol),
}

#[contracttype]
#[derive(Clone)]
pub struct MedicalHistory {
    pub records: Vec<MedicalRecord>,
}

const RECORD_KEY_PREFIX: Symbol = symbol_short!("RECORD_");

#[contract]
pub struct MedicalHistoryContract;

#[contractimpl]
impl MedicalHistoryContract {
MedicalHistoryContract
    pub fn addMedicalRecord(env: Env, aadharNumber: Symbol, disease: Symbol, medications: Vec<Symbol>, doctorName: Symbol, date: u64) {
        // Create an instance of MedicalHistoryContract to call view_history
        let _ = MedicalHistoryContract {};
        let mut history = view_history!(env.clone());
        let record = MedicalRecord {
            disease,
            medications,
            doctor_name: doctorName,
            date,
        };
        history.records.push(record);
        env.storage().persistent().set(&MEDICAL_HISTORY, &history);
        log!(&env, "Medical Record Added!");
    }

      pub fn getMedicalHistory(env: Env, aadharNumber: Symbol) -> Vec<MedicalRecord> {
        let history = env.storage().instance().get(&MEDICAL_HISTORY).unwrap_or(MedicalHistory {
            records: vec![&env], // Corrected line
        });
        history.records
    }

    pub fn view_history(env: Env) -> MedicalHistory {
        env.storage().instance().get(&MEDICAL_HISTORY).unwrap_or(MedicalHistory {
            records: vec![&env],
        })
    }
}