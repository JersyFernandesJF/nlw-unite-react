import { AttendeesList } from "./components/attendees-list"
import { Header } from "./components/header" 

export function App() {

  return (
   <div className="max-w-[1216px] mx-auto py-5 flex flex-col">
    <Header/>
    <AttendeesList/>
   </div>  
  )
}

