import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import Image, { ImageProps } from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { FiX } from "react-icons/fi";

const Header = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className={styles.container}>
        <h2>NextAuth</h2>
        <p></p>
        <div className={styles["icons-container"]}>
          {session ? (
            <>
              <button onClick={() => signOut()}>
                <FaGithub color={"#eba417"} />
                {session.user?.name}

                <FiX className={styles.closeIcon} />
              </button>

              <Image
                src={session.user?.image}
                alt={session.user?.name}
                width="300"
                height="300"
              />
            </>
          ) : (
            <>
              <button onClick={() => signIn("github")}>
                <FaGithub color={"#eba417"} />
                Login With Github
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
