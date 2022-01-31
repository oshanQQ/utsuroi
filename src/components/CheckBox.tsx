type Props = {
  prefName: string;
};

const CheckBox: React.VFC<Props> = ({ prefName }) => {
  return (
    <div>
      <input type="checkbox" name="prefecture" />
      <label htmlFor="">{prefName}</label>
    </div>
  );
};

export default CheckBox;
