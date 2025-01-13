const RoleCheckbox = ({ onCheckboxChange1, selectedRole }) => {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedRole === "doctor" ? "selected" : ""}`}>
          <span className='label-text'>Doctor</span>
          <input
            type='checkbox'
            className='checkbox border-slate-900'
            checked={selectedRole === "doctor"}
            onChange={() => onCheckboxChange1("doctor")} 
          />
        </label>
      </div>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer  ${selectedRole === "sick" ? "selected" : ""}`}>
          <span className='label-text'>Sick</span>
          <input
            type='checkbox'
            className='checkbox border-slate-900'
            checked={selectedRole === "sick"}
            onChange={() => onCheckboxChange1("sick")}
          />
        </label>
      </div>
    </div>
  );
};

export default RoleCheckbox;
