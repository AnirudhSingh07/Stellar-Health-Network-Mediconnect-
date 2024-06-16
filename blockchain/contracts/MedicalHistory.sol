// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0  ;

contract MedicalHistory {

    struct MedicalRecord {
        string disease;
        string[] medications;
        string doctorName;
        uint date;
    }
    mapping (uint => MedicalRecord[]) public medicalRecordsByAadhar;

    function addMedicalRecord(
        uint aadharNumber,
        string memory disease,
        string[] memory medications,
        string memory doctorName,
        uint date
    ) public {
        medicalRecordsByAadhar[aadharNumber].push(MedicalRecord(disease,medications,doctorName,date));
    }

    function getMedicalRecords(uint aadharNumber) public view returns (MedicalRecord[] memory) {
        return medicalRecordsByAadhar[aadharNumber];
    }
}

