let employees = [
    { name: "Nsha", basePay: 30000, bonus: 2000, taxRate: 0.1 },
    { name: "Savi", basePay: 25000, bonus: 1500, taxRate: 0.08 },
    { name: "Gowri", basePay: -1000, bonus: 2000, taxRate: 0.1 },
    { name: "Varun", basePay: 40000, bonus: 3000, taxRate: 0.15 },
  ];
  let validRecords = employees.filter(emp =>
    emp.basePay > 0&&
    emp.bonus >= 0&&
    emp.taxRate >= 0&&
    emp.taxRate <= 1
  );
  let netPayReport = validRecords.map(emp => {
  
    let gross = emp.basePay + emp.bonus;
    let netPay = gross - (gross * emp.taxRate);
  
    return {
      name: emp.name,
      netPay: netPay
    };
  
  });
  let totalNetPayout = netPayReport.reduce((sum, emp) => {
    return sum + emp.netPay;
  }, 0);
  console.log( validRecords);
  console.log( netPayReport);
  console.log( totalNetPayout);