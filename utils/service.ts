const fetchAdd = async(num1:number | string, num2:number | string)=>{
    const response= await fetch(`https://allinoneaping-d6crh0ake7e8hbd8.westus3-01.azurewebsites.net/api/AddNumbers/TwoNumbers/${num1}/${num2}`);
    const data = await response.text();

    return data
}

const fetchAsk = async(name:string, time:string)=>{
    const response= await fetch(`https://allinoneaping-d6crh0ake7e8hbd8.westus3-01.azurewebsites.net/api/AskingQuestions/Questions/${name}/${time}`);
    const data = await response.text();

    return data
}
const fetchHello = async(name:string)=>{
    const response= await fetch(`https://allinoneaping-d6crh0ake7e8hbd8.westus3-01.azurewebsites.net/api/HelloWorld/HelloWorld/${name}`);
    const data = await response.text();

    return data
}

const fetchGreater = async(num1:number | string, num2:number | string)=>{
    const response= await fetch(`https://allinoneaping-d6crh0ake7e8hbd8.westus3-01.azurewebsites.net/api/GreaterOrLesser/GreaterOrLesser/${num1}/${num2}`);
    const data = await response.text();

    return data
}

const fetchMad = async(name:string, mood:string, food:string, animal:string, adjective:string, item:string, place:string, activity:string)=>{
    const response= await fetch(`https://allinoneaping-d6crh0ake7e8hbd8.westus3-01.azurewebsites.net/MadLib/${name}/${mood}/${food}/${animal}/${adjective}/${item}/${place}/${activity}`);
    const data = await response.text();

    return data
}

const fetchOdd = async(num:number | string)=>{
    const response= await fetch(`https://allinoneaping-d6crh0ake7e8hbd8.westus3-01.azurewebsites.net/api/OddOrEven/OddOrEven/${num}`);
    const data = await response.text();

    return data
}
const fetchReverseAlpha = async(alphaNum: string)=>{
    const response= await fetch(`https://allinoneaping-d6crh0ake7e8hbd8.westus3-01.azurewebsites.net/api/ReverseAlphaNum/ReverseAlphaNum/${alphaNum}`);
    const data = await response.text();

    return data
}

const fetchReverseNum = async(num:number | string)=>{
    const response= await fetch(`https://allinoneaping-d6crh0ake7e8hbd8.westus3-01.azurewebsites.net/api/ReverseNum/ReverseItNum/${num}`);
    const data = await response.text();

    return data
}

const fetchMagic = async(question:string)=>{
    const response= await fetch(`https://allinoneaping-d6crh0ake7e8hbd8.westus3-01.azurewebsites.net/api/Magic8Ball/Fortune/${question}`);
    const data = await response.text();

    return data
}

const fetchRestaurant = async(pick:string)=>{
    const response= await fetch(`https://allinoneaping-d6crh0ake7e8hbd8.westus3-01.azurewebsites.net/api/ResturantPicker/MexicanPizzaOrFastFood/${pick}`);
    const data = await response.text();

    return data
}

export {fetchAdd, fetchAsk, fetchHello, fetchGreater, fetchMad, fetchOdd, fetchReverseAlpha, fetchReverseNum, fetchMagic, fetchRestaurant}