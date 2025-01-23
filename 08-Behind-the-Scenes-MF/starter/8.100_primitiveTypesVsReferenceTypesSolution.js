'use strict';

const company = {
  firstName: 'Thomson',
  lastName: 'xyz',
};

const companyAfterAlliance = company;
companyAfterAlliance.lastName = 'Reuters';

console.log(company, companyAfterAlliance);

// To perserve old company data
const company2 = {
  firstName: 'Thomson',
  lastName: 'xyz',
  employees: ['Samson', 'George'], // Object; Reference type
};

const company2AfterAlliance = Object.assign({}, company2); // It's a shadow copy works only on primitive types
company2AfterAlliance.lastName = 'Reuters';

console.log(company2, company2AfterAlliance);
