import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import 'bootstrap/dist/css/bootstrap.min.css';

const StatCard = ({ img, num, description, popover }) => {
    return (
        <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={popover}
        >
            <div className="stat-card">
                <div className="flex flex-col items-center justify-content">
                    <div className="stat-img">
                        {img}
                    </div>
                    <p className="value">
                        {num}
                    </p>
                    <p className="stat">
                        {description}
                    </p>
                </div>
            </div>
        </OverlayTrigger>
    );
};

export { StatCard };