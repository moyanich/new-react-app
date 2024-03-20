import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {

   
    function onAddMeetupHandler(meetupData) {
        fetch(
            'https://reactapp-6b3dd-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData)  ,
                headers: {
                    'Content-Type': 'application/json'
                }   
            }
        );
    }


    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>

        </section>

    );
        
}

export default NewMeetupsPage;