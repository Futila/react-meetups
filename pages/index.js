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

export default function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
