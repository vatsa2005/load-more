import React from 'react';
import "./styles/loadMore.css";
import { useState } from 'react';

function LoadMore({children, wantLoadLess = true}) {
    const[loadMore, setLoadMore] = useState(false);
    const[clsName, setClsName] = useState("");

    function load() {
        setLoadMore(true);
    }
    function loadLess() {
        setClsName("disappear");
        setTimeout(() => {
            setClsName("");
            setLoadMore(false);
        }, 900);
    }

    return (
       loadMore ? ( 
            <div className={`content ${clsName}`}>
                {children}
                {wantLoadLess && (
                    <div className= {`load ${clsName}`}>
                        <div className={`load__clickable ${clsName}`} onClick={loadLess}>
                            <p>Load Less</p>    
                        </div>
                    </div>
                )}
            </div>
        ) : (
            <div className='load'>
                <div className='load__clickable' onClick={load}>
                    <p>Load More</p>
                </div>
            </div>
        )
    );
}

export default LoadMore;
