import React, {useState} from "react";

const FormCheckbox = ({ tags, checked_tags }) => {
  console.log(checked_tags);
  const [isthere, notThere] = useState(false)
  return (
    <div className="flex flex-col ">
      {tags.map((tag) => (
        <div className="flex flex-row items-center gap-1">
          <input
            type="checkbox"
            value={tag.id}
            defaultChecked={checked_tags?.includes(tag.id)}
            name="product[tag_ids][]"
            id={`product_tag_ids_${tag.id}`}
          />
          <h2 className="text-sm">{tag.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default FormCheckbox;
