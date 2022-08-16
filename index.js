// Code your solution in this file!
function distanceFromHqInBlocks(distance) 
{
    if (distance>42)
    {
        return distance-42;
    }
    else 
    {
        return 42 - distance;
    }
}

function distanceFromHqInFeet(iFeet)
{
    return distanceFromHqInBlocks(iFeet)* 264;
}

 function distanceTravelledInFeet(startA, finishB)
 {
    let totalAB;

    if (finishB>startA)
    {
        totalAB = finishB-startA;
    }
    else
    {
        totalAB = startA-finishB
    }
     return totalAB*264;
 }


 function calculatesFarePrice(start,destination)
 {
    let totalAB;
    totalAB = distanceTravelledInFeet(start,destination);
    let fare;

    if(totalAB<=400)
    {
        return fare = 0;
    }
    else if(totalAB>400 && totalAB <= 2000)
    {
        return fare = 2.56;
    }
    else if(totalAB>2000 && totalAB<=2500)
    {
        return fare = 25;
    }
    else
    {
        return fare = `cannot travel that far`;
    }

 }
/*function distanceFromHqInBlocks(distance) 
{
    console.log( distance);
    return (8);
}

function distanceFromHqInBlocks(distance) 
{
    if( distance < `42nd street`);
    return (8);
}*/