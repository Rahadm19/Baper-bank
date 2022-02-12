document.getElementById('diposit-button').addEventListener('click', function (){
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmountText = depositInput.value;
    // ডিপোজিটের মধ্যে ইন্টিজার রুপে সেট করার 
    const newdepositAmount = parseFloat(newdepositAmountText);
    //যেখানে এমাউন্ট দেখাবে সেটাকে এখানে তুলে নিয়ে আসা।

    const dipositTotal = document.getElementById('diposit');
    const previousDepositText = dipositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    // ইনপুটের সাথে ডিপোজিটের এমাউন্ট যোগ করা 
    const newDepositTotal = previousDepositAmount + newdepositAmount;
    // যোগ করে সেখানে ডিসপ্লে করানো
    dipositTotal.innerText = newDepositTotal;
    //ব্যালেন্সের সাথেও যোগ করা
    const balanceTotal = document.getElementById('balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalance + newdepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    // ইনপুটের ভিতরের ভ্যালু গুলোকে রিমুভ করা 
    depositInput.value = '';
})

// উইথড্র করার জন্য যা করা যায়

// প্রথমে কোন বাটনে চাপ দিলে উইথ ড্রে হবে সেটাকে ইভেন হ্যান্ডলার করতে হবে 

document.getElementById('withdra-button').addEventListener('click', function (){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText =withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    const previousWithdrawTotal = document.getElementById('withdraw');
    const previousWithdrawText = previousWithdrawTotal.innerText;
    const previousWithdraw = parseFloat(previousWithdrawText);

    const totalWithdraw =  withdrawAmount + previousWithdraw;
    previousWithdrawTotal.innerText = totalWithdraw;

    const balanceTotal = document.getElementById('balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);

    const afterWithdraTotalBalance = previousBalance - withdrawAmount;
    balanceTotal.innerText = afterWithdraTotalBalance;

    withdrawInput.value = '';
    

 })
