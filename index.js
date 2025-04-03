

const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",

};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        "streetAddress": "11 Broadway",
    };
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee["streetAddress"] = "12 Broadway";
    return employee;  
    
};
function deleteFromEmployeeByKey(employee, key) {
    const deletedEmployee = {...employee};
    delete deletedEmployee[key];
    return deletedEmployee;
};
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};