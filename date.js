exports = function()
{
	  const cal = new Date();
    const day = cal.getDay();

    const options = {
        month: 'long',
        weekday: "long",
        day: "numeric"
    };
    return cal.toLocaleDateString("en-us", options);
    
}
