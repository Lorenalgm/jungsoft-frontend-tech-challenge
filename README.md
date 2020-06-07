<br />
<p align="center">
    <img src="https://i.imgur.com/Hu6m5dt.png" alt="Logo" width="100" height="100">
  <h3 align="center">Jungsoft Challenge</h3>

  <p align="center">    
    A website where you can order food kits to cook for yourself!
       <br />
    <br />
     <a href="https://xd.adobe.com/view/7dc52aae-3138-47ed-4e1b-b7fffa1874fd-0bf4/">Layout 1</a> 
      .
  <a href="https://xd.adobe.com/view/ee93c1e8-bf33-48ac-7c51-2e974ca577bb-98a2/">Layout 2</a> 
  </p> 

## Table of contents

* [About](#about)
  * [Web](#web)
  * [Mobile](#mobile)
* [Technologies](#technologies)
* [Notes](#notes)
* [How To Use](#how-to-use)
* [Contacts](#contacts)

## About
The goal of this challenge is to create part of one page using an API and layout developed by Jungsoft's team. 
<br>The project is a website where you can order food kits to cook for yourself, so in the frontend is necessary to select the amount of people to feed and the amount of recipes to receive per week, the prices will be calculate based on this.

### Web
<p align="center">
<img src="https://i.imgur.com/hBABnLL.png" width="580" height="380">
</p>

### Mobile
<p align="center">
<img src="https://imgur.com/j57SI9k.png" width="480" height="580">
</p>

### Technologies:
- Reactjs
- GraphQL
- Apollo

## Notes
1 - In the available challenge template, the number of people was 2 and 4, and the amount of recipes was 1, 2 and 3. However, when observing the API I noticed that there were not so many plans available with this numbering, so I chose to change these numbers for:<br>
Number of people 3 and 4<br>
Number of recipes 3, 4 and 5<br>
<br>
2 - The plans are dynamic, so I created an array containing the amount of people available and another array containing the amount of recipes. At that moment I put this information in a static way, but the correct thing would be to collect this data directly from the API, as the administrators create and delete the plans.<br>
<br>
### How To Use

1. Clone this repository:
```sh 
git@github.com:Lorenalgm/jungsoft-frontend-tech-challenge.git
```
2. Open the project in your editor
3. In your terminal, install the necessary packages:
```sh 
yarn 
``` 
4. Now you can start the server
```sh 
yarn start
```
5. Ready! The challenge is available at http://localhost:3000/

## Contacts
E-mail: lgoesmontes@gmail.com<br>
Linkedin: https://www.linkedin.com/in/lorenagmontes/

   
