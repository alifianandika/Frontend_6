import styles from "./Form.module.css";

function Form(){
    return(
        <div className={styles.container}>
            <section className={styles.Form}>
                <div className={styles.Form__left}>
                    {/* <h2 className={styles.hero__title}>Spiderman</h2>
                    <h3 className={styles.hero__genre}>Genre : Drama, Romance</h3>
                    <p className={styles.hero__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod culpa amet obcaecati perferendis explicabo inventore voluptatem saepe eos libero!</p>
                    <button className={styles.hero__button}>Watch</button> */}

                    <img className={styles.Form__image} src="https://picsum.photos/600/400" alt="" />
                </div>

                

                <div className={styles.Form__right}>
                    <h1 className={styles.Form__title}>Add Movie</h1>
                    <form  className={styles.Form__add} action="Contact">
                        
                        <div className={styles.Form__control}>
                            <p>Title</p>
                            <input className={styles.Form__inputone} type="text" />
                        </div>
                        
                        <div className={styles.Form__control}>
                            <p>Year</p>
                            <input className={styles.Form__inputtwo} type="date" />
                        </div>
                        
                        
                        <button className={styles.Form__button}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Form;