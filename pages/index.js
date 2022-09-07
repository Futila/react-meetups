import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First meetup",
    image: "https://avatars.githubusercontent.com/u/86152008?v=4",
    address: "Some address 220, name city",
    description: "This a first meetup!",
  },
  {
    id: "m2",
    title: "A Second meetup",
    image: "https://avatars.githubusercontent.com/u/86152008?v=4",
    address: "Some address 220, name city",
    description: "This a second meetup!",
  },
];

export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.REACT_APP_MONGO_USER}:${process.env.REACT_APP_MONGO_PASSWORD}@cluster0.jnthl8v.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  console.log(meetups);
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
  };
}

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}
