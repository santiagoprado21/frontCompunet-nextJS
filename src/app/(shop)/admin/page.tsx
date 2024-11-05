"use server"
import { GetServerSideProps } from "next";
import { isValidElement } from "react";

const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies.token;

  if (!token || !isValidElement(token)) { //should be valid token
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default async function AdminPage() {
  return(
    <div>Admin Page</div> //Is not working
  )
}