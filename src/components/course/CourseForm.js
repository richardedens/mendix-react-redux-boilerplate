import React, {PropTypes} from 'react';
import TextArea from '../common/TextArea';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  return (
      <form>
        <h1>Manage Course</h1>
        <TextArea
          name="title"
          label="Title"
          value={course.title}
          onChange={onChange}
          error={errors.title} />

        <SelectInput
          name="author"
          label="Author"
          value={course.authorId}
          defaultOption="Select Author"
          options={allAuthors}
          onChange={onChange}
          errors={errors.authorId} />

        <TextArea
          name="category"
          label="Category"
          value={course.category}
          onChange={onChange}
          error={errors.category} />

        <TextArea
          name="length"
          label="Length"
          value={course.length}
          onChange={onChange}
          error={errors.length} />

        <input
          type="submit"
          disabled={loading}
          value={loading ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={onSave} />
      </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
