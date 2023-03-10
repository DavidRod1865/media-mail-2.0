const button = document.querySelector('.submit')
const shippingFee = document.querySelector('.shipping')
const paypalFee = document.querySelector('.paypal')
const excludingFees = document.querySelector('.excludingFees')
const includingFees = document.querySelector('.includingFees')
// const weightValue = document.querySelector('.weightValue')
// const valueValue = document.querySelector('.valueValue')

class Books {
    constructor(weight, price) {
        this.weight = Number(weight);
        this.price = Number((price).toFixed(2));

        //Calculates "USPS Shipping Rate"
        this.calShipping = () => {
            if (weight <= 70 && weight > 0){
                let uspsRate = +(0.7 * (weight - 1) + 3.65).toFixed(2)
                shippingFee.innerText = uspsRate
                return uspsRate
            } else 
                alert(`Weight must be less than 70 Lbs.`)
                location.reload()
        };
        
        //Calculates "Paypal Commission Fee"
        this.calPayPal = () => {
            if (Number(price) > 0){
                let fee = Number(((price * .0349) + 0.49).toFixed(2))
                paypalFee.innerText = fee
                return fee
            }   
            else if (Number(price) <= 0) {
                paypalFee.innerText = "0.00"
                return 0
            }
        };
    }
    
    //Calculates the User's profit before & after taxes
    calProfit = () => {
        // weightValue.innerText = (+document.querySelector(".weight").value).toFixed(2);
        // valueValue.innerText = (+document.querySelector(".price").value).toFixed(2);
        excludingFees.innerText = (this.price - (this.calShipping() + this.calPayPal())).toFixed(2);
        includingFees.innerText = (this.price + (this.calShipping() + this.calPayPal())).toFixed(2);
    };
    
};

function getValues() {
    let weight = +document.querySelector(".weight").value;
    let price = +document.querySelector(".price").value;
    const packaged_Books = new Books(weight, price);
    packaged_Books.calShipping();
    packaged_Books.calPayPal();
    packaged_Books.calProfit();
}

function appear() {
    if ($('div').hide()) $('div').show();
    else return false;

}function fade() {
    if ($('.fade').css('opacity') == 0) $('.fade').css('opacity', 1);
    else return false;
}

button.addEventListener('click', () => {
    getValues(),
    appear(),
    fade()
})
