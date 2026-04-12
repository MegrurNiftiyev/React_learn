import Header from './componenets/header/header'
import ListTile from './componenets/list-tile/ListTile'
import UserProfile from './componenets/user-profile/UserProfile'

function App() {
  const comments = [
    { id: 1, name: 'Veli', comment: 'Ders anlatimi cok akiciydi, props konusunu net anladim.' },
    { id: 2, name: 'Ayse', comment: 'Ornekler sayesinde component mantigi kafama oturdu.' },
    { id: 3, name: 'Mert', comment: 'Styling kismi ozellikle faydali oldu, devamini bekliyorum.' },
   ]
  
const users=[
  {id:1,profile_image:"https://thispersondoesnotexist.com/",name:"alex",email:"alex@gmail.com"},
  {id:2,profile_image:"https://thispersondoesnotexist.com/",name:"sara",email:"sara@gmail.com"},
  {id:3,profile_image:"https://thispersondoesnotexist.com/",name:"mike",email:"mike@gmail.com"}
]
  return (
    <>
      <Header />

      <ListTile title="First title" subtitle="lorem ipsum dolor simt amet lorem ipsum dolor simt amet" />
      <ListTile title="Second title" subtitle="lorem ipsum dolor simt amet lorem ipsum dolor simt amet" />
      {comments && comments.map((comment) => {
        return <ListTile key={comment.id}  title={comment.name} subtitle={comment.comment}/>
     } )}
     {users && users.map((user)=>{
      return <UserProfile key={user.id} user={user}/>
     })}
    </>
  )
}

export default App
