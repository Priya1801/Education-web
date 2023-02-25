import React from "react";

const SubCard = ({subjectData}) => {

    return(
        <>
        <section className="main-card--container">
            {subjectData.map((curElem) => {
                const {id, name, category, description} = curElem;
                return (
                    <>
                    <div className="card-container" key={id}>
                      <div className="card">
                        <div className="card-body">
                            <span className="card-number card-circle subtle">{id}</span>
                            <span className="card-author subtle">{category}</span>
                            <h2 className="card-title">{name}</h2>
                            <span className="card-description subtle">
                                {description}
                            </span>
                    <div className="card-read"></div>
                </div>
                {/* <span className="card-tag subtle">Practice</span> */}
                <button className="card-tag subtle">Explore</button>
            </div>
        </div>
                    </>
                );
            })}
        </section>
        </>
        
    );
};

export default SubCard;