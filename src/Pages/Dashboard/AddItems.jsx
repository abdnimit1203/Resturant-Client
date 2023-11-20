import AddItemForm from "../../Components/Forms/AddItemForm";
import SectionTitle from "../../Components/Titles/SectionTitle";


const AddItems = () => {
    return (
        <div>
            
            <SectionTitle heading={"ADD A Item"} subHeading={"Whats new?"}></SectionTitle>
            <div className="">
                <AddItemForm></AddItemForm>
            </div>
        </div>
    );
};

export default AddItems;