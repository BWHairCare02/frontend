import axios from "axios";
import React, { useState, UseEffect } from "react";
import ReviewCard from "./ReviewCard";
import { connect } from "react-redux";

const CustomerReview = props => {
  const { review } = props;

  return (
    <div className="reviews">
      {review.length === 0 ? (
        <h3 className="none"> 0 Reviews</h3>
      ) : (
        review.map(content => {
          return <ReviewCard content={content} key={content.id} />;
        })
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    review: state.reviews
  };
};
export default connect(mapStateToProps, {})(CustomerReview);
