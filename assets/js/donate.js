//  Submit Doantion
function handleSubmit(event){
    event.preventDefault();
    const amount = parseFloat(event.target.amount.value);
    if (!isNaN(amount)) {

        //  Check Donate Amount must be greater than 0
        if (amount <= 0) {
            alert('Donate Amount must be greater than 0');
            return;
        }

        let availableBalance = getText('available-balance');
        availableBalance = parseFloat(availableBalance);

        //  Check Donate Amount must be less than Available Amount
        if(amount > availableBalance){
            alert('Insufficient Balance');
            return;
        }

        //  Update Available Balance 
        const newAvailableBalance = availableBalance - amount;
        setText('available-balance', newAvailableBalance);

        //  Update Donated Amount
        const currentEvent = event.target.parentNode.parentNode;
        let donatedAmount = currentEvent.querySelector('.total-donate-amount').innerText;
        const newDonatedAmount = parseFloat(donatedAmount) + amount;
        currentEvent.querySelector('.total-donate-amount').innerText = newDonatedAmount;
        
        //  Get Event Title and create custom message and time
        let title = currentEvent.querySelector('.event-title').innerText;
        const message = `${amount} Taka is Donated for ${title}`;
        const date = new Date();
        const formattedDate = date.toString();
        const time = `Date : ${formattedDate}`;    

        updateDonateHistory(message, time);
        document.getElementById('success_modal').showModal();
        
        //  Reset Form Fields
        event.target.reset();
    } else {
        alert('Please enter a valid donation amount.');
        return;
    }    
}

//  Update Donate History
function updateDonateHistory(message, time){

    document.getElementById('not-found-message').classList.add('hidden');

    let donateHistoryHTML = document.createElement('div');
    donateHistoryHTML.innerHTML = `
        <!-- Single Item Start  -->
            <div class="card bg-base-100 shadow border">
                <div class="card-body flex flex-col justify-between">
                    <h2 class="card-title text-xl py-1 text-gray-950">
                        ${message}
                    </h2>
                    <p class="text-justify text-gray-600 bg-[#F3F3F3] px-4 py-2 rounded-md">
                        ${time}
                    </p>
                </div>
            </div>
        <!-- Single Item End  -->
    `;

    const donateHistory = document.getElementById('donation-history-menu-content');
    donateHistory.prepend(donateHistoryHTML);
}