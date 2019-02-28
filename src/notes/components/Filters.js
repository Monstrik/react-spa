import React from "react";
import cx from "classnames";

import {connect} from "react-redux";
import {setFilter, resetAll} from "../redux/actions";

import {VISIBILITY_FILTERS} from "../constants";

const Filters = ({activeFilter, setFilter, resetAll}) => {
    return (
        <div className="text-center">
            {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                const currentFilter = VISIBILITY_FILTERS[filterKey];
                return (

                    <span
                        key={`visibility-filter-${currentFilter}`}
                        className={cx(
                            "filter",
                            currentFilter === activeFilter && "filter--active"
                        )}
                        onClick={() => {
                            setFilter(currentFilter);
                        }}
                    >
                        | {currentFilter} |
                    </span>


                );
            })}
            <br/><br/><br/>
            <span className="alert-danger" onClick={() => {
                resetAll();
            }}>
                RESET ALL!
            </span>
        </div>
    );
};

const mapStateToProps = state => {
    return {activeFilter: state.filter};
};

export default connect(mapStateToProps, {setFilter, resetAll})(Filters); // export default Filters;
