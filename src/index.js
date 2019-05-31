
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail.js';
import ApprovalCard from './ApprovalCard.js';

const App = () => {
return(
<div>
    <div className="ui container comments">
        <ApprovalCard>
            <div>
                <h4>Warning!</h4>
                <p>Are you sure you want to do this?</p>
            </div>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Sam" timeAgo="Today at 4:34PM" comment="That's what I'm saying!" img={faker.image.avatar()}/>  
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Alex" timeAgo="Today at 3:32PM" comment="Could it be?" img={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Jane" timeAgo="Today at 7:00PM" comment="So funny!" img={faker.image.avatar()}/>
        </ApprovalCard>
    </div>
</div>
);
}

ReactDOM.render(
<App />,
document.querySelector("#root")
);