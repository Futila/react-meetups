import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function DetailsPage() {
  return (
    <MeetupDetail
      id="m1"
      image="https://avatars.githubusercontent.com/u/86152008?v=4"
      title="A First meetup"
      address="Some address 220, name city"
      description="This a first meetup!"
    />
  );
}

export async function getStaticProps(context) {
  //fetch the data for a single meetup
  const meetupId = context.params.meetupId;

  return {
    props: {
      image: "https://avatars.githubusercontent.com/u/86152008?v=4",
      id: meetupId,
      title: "A First meetup",
      address: "Some address 220, name city",
      description: "This a first meetup!",
    },
  };
}