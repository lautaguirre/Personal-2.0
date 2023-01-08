import React from "react";
import styled from "styled-components";
import Link from "next/link";

const ContentRow = styled.div`
  min-height: calc(100vh - 56px);
`;

const BackLink = styled.span`
  color: black;
`;

export default function NotFound() {
  return (
    <div>
      <ContentRow>
        <div>
          <div>
            <div>
              <h1>Oops! Wrong URL</h1>
              <div>
                {/* <FontAwesomeIcon
                  icon={faExclamationCircle}
                  size="5x"
                  color="black"
                /> */}
              </div>
              <Link href="/">
                {/* <FontAwesomeIcon
                  icon={faArrowCircleLeft}
                  className="mr-2"
                  color="black"
                /> */}
                <BackLink>Go to index</BackLink>
              </Link>
            </div>
          </div>
        </div>
      </ContentRow>
    </div>
  );
}
