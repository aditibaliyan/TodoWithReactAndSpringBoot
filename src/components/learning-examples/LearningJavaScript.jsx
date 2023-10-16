const person ={
    name:'Aditi',
    address: {
        line1: 'Baker Street',
        city: 'London',
        Country: 'UK'
    },
    profile: ['twitter','facebook','watsapp'],
    PrintProfile: () => person.profile.map(profile => console.log(profile))
}


export default function LearningJavaScript(){
   return (
    <>
    <div>{person.name}</div>
    <div>{person.address.city}</div>
    <div>{person.profile[0]}</div>
    <div>{person.PrintProfile()}</div>
    </>
   )

}