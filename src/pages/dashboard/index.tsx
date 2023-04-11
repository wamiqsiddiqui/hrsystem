import "../../dashboard.css";
import { UploadCV } from "../../components/UploadCV";
import { Layout } from "./Layout";

const Dashboard = () => {



  return (
    <Layout rightElement={
      <UploadCV onUpload={(arg) => {
        console.log(arg)
      }} />}
    >

    </Layout>
  );
};
export default Dashboard;
