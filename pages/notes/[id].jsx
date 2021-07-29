import React from "react";
import PropTypes from "prop-types";
import Link from 'next/link'

function Page(props) {
  return (
    <div>
      <Link href='/settings'>
        <a>settings</a>
      </Link>
    </div>
  );
}

Page.propTypes = {};

export default Page;
