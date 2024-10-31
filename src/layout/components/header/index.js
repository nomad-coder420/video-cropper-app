import classes from "./styles.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div>
        <p className={classes.heading}>Cropper</p>
      </div>
      <div className={classes.tabsContainer}>
        <div className={`${classes.tabButton} ${classes.activeTab}`}>
          <p className={classes.tabText}>Generate Session</p>
        </div>
        <div className={classes.tabButton}>
          <p className={classes.tabText}>Preview Session</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
