// the	future	value	of	$10000	in	cash	invested	into	market	with	a	15%	rate	of	return	for	35	years.	
// πΉπ’π‘π’ππ ππππ’π = πΆππ β Γ (1+ πππ‘π ππ πππ‘π’ππ)^ πππe
window.addEventListener("load", main) // Call main after page loads
function main() {
    // Call function when button is clicked.
    btFutureValue.addEventListener("click", FutureValue)
}
function FutureValue() {
    // Variables
    var FutureValue
    var Cash
    var RateOfReturn
    var Time
    // Inputs from html form
    Cash = parseFloat(txCash.value)
    RateOfReturn = parseFloat(txRateOfReturn.value)
    Time = parseFloat(txTime.value)
    // Processing
    FutureValue=Cash*(1+RateOfReturn)**Time
    // Output to html results page
    // console.log("The future value is $" +FutureValue.toFixed(2))
    spFutureValue.innerHTML = FutureValue.toFixed(2)
    // Add comments about the results
    // Future Value (FV): βover 100% return!β, if FV is more than double the principal; βgrowthβ, otherwise
    if(FutureValue>(2*Cash)) {
        spComments.innerHTML = "over 100% return!"
    } else {
        spComments.innerHTML = "growth"
    }
}
