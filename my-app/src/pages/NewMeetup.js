import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupsPage() {
    const navigate = useNavigate();
   
    function onAddMeetupHandler(meetupData) {
        fetch(
            'https://reactapp-6b3dd-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData)  ,
                headers: {
                    'Content-Type': 'application/json',
                },   
            }
        ).then(() => {
            navigate('/');
        });
    }


    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
        </section>

    );
        
}

export default NewMeetupsPage;