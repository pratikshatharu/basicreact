import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card2';


ReactDOM.render(
    <>
        <h1>LIST OF FAV CHOCOLATES</h1>
        <Card imgsrc="https://s3.images-iherb.com/lov/lov00171/w/0.jpg"
            title="CHOCOLATE FLAVOURS"
            sname="dark chocolate"
            link="https://www.iherb.com/pr/Chocolove-Almonds-Sea-Salt-in-Strong-Dark-Chocolate-70-Cocoa-3-2-oz-90-g/98247?gclid=CjwKCAjw47eFBhA9EiwAy8kzNPmCXL51l62YijsbbXat-t2nf3Hi2ovjFFYwV2x6iO7g4Vb2coqRMhoCfQ0QAvD_BwE&gclsrc=aw.ds"
        />
        <Card imgsrc="https://s3.images-iherb.com/lov/lov07501/w/0.jpg"
            title="CHOCOLATE FLAVOURS"
            sname="chocolove bites"
            link="https://www.iherb.com/pr/Chocolove-Bites-Salted-Almond-Butter-in-55-Dark-Chocolate-3-5-oz-100-g/98250?gclid=CjwKCAjw47eFBhA9EiwAy8kzNGl00mfm9C6Y18uzCjRW3d-SYVxrn6fePi9gNETAJ7Iv2b40sqGr1BoCd8EQAvD_BwE&gclsrc=aw.ds"
        />
        <Card imgsrc="https://s3.images-iherb.com/sro/sro01061/w/3.jpg"
            title="CHOCOLATE FLAVOURS"
            sname="Montmorency cherries"
            link="https://www.iherb.com/pr/Stoneridge-Orchards-Montmorency-Cherries-Dipped-in-Dark-Chocolate-70-Cocoa-5-oz-142-g/66561?gclid=CjwKCAjw47eFBhA9EiwAy8kzNIg7MuAdyGdlXAOfhfeMZR7a1n84BHCPZfSGZV7H1sd86tSBrohSKhoCwDQQAvD_BwE&gclsrc=aw.ds"
        />
    </>,

    document.getElementById("root")
);
export default Card;