import React from "react";
import PropTypes from "prop-types";
import FacebookProvider, { Comments as FBComments } from "react-facebook";
import Disqus from 'disqus-react';

import config from "../../../content/meta/config";

const Comments = props => {
  const { post, facebook, slug, theme } = props;
  const disqusShortname = 'svportal';
  const disqusConfig = {
      url: "https://svportal.disqus.com" + slug,
      identifier: post.id,
      title: slug,
      // url: this.props.article.url,
      // identifier: this.props.article.id,
      // title: this.props.article.title,
  };

  return (
    <React.Fragment>
      <div id="post-comments" className="comments">
        <Disqus.DiscussionEmbed  shortname={disqusShortname} config={disqusConfig} />
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .comments {
          margin: 0 -8px ${theme.space.default};
        }
      `}</style>
    </React.Fragment>
  );
};

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Comments;

{/* <FacebookProvider appId={facebook.appId}>
  <FBComments href={`${config.siteUrl}${slug}`} width="100%" colorscheme="light" />
</FacebookProvider> */}

