import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  function addMeetupHandler(meetup) {
    console.log(meetup);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
