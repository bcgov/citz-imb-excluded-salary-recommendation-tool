export const fieldsInquiry = [
  {
    name: 'id',
    label: 'id',
    type: 'number',
    // required: true,
    defaultValue: 0,
  },
  {
    name: 'status_id',
    label: 'status_id',
    type: 'status',
    // required: true,
    defaultValue: 1,
  },
  {
    name: 'inquiry_submission_date',
    label: 'inquiry_submission_date',
    type: 'date',
    // required: true,
    defaultValue: '',
  },
  {
    name: 'inquiry_completion_date',
    label: 'inquiry_completion_date',
    type: 'date',
    // required: true,
    defaultValue: '',
  },
  {
    name: 'candidate_first_name',
    label: 'candidate_first_name',
    type: 'text',
    // required: true,
    defaultValue: '',
  },
  {
    name: 'candidate_last_name',
    label: 'candidate_last_name',
    type: 'text',
    // required: true,
    defaultValue: '',
  },
  {
    name: 'current_position_number',
    label: 'current_position_number',
    type: 'number',
    // required: true,
    defaultValue: 0,
  },
  {
    name: 'current_position_title',
    label: 'current_position_title',
    type: 'text',
    // required: true,
    defaultValue: '',
  },
  {
    name: 'current_ministry_id',
    label: 'current_ministry_id',
    type: 'dropdown',
    // required: true,
    defaultValue: '',
  },
  {
    name: 'current_annual_salary',
    label: 'current_annual_salary',
    type: 'currency',
    // required: true,
    defaultValue: 0,
  },
  {
    name: 'current_mccf_classification_id',
    label: 'current_mccf_classification_id',
    type: 'number',
    // required: true,
    defaultValue: 0,
  },
  {
    name: 'experience_level_id',
    label: 'experience_level_id',
    type: 'radio',
    // required: true,
    defaultValue: 0,
  },
  {
    name: 'new_position_number',
    label: 'new_position_number',
    type: 'number',
    // required: true,
    defaultValue: 0,
  },
  {
    name: 'new_position_title',
    label: 'new_position_title',
    type: 'text',
    // required: true,
    defaultValue: '',
  },
  {
    name: 'new_mccf_classification_id',
    label: 'new_mccf_classification_id',
    type: 'number',
    // required: true,
    defaultValue: 0,
  },
  {
    name: 'appointment_type_id',
    label: 'appointment_type_id',
    type: 'dropdown',
    // required: true,
    defaultValue: '',
  },
  {
    name: 'process_type_id',
    label: 'process_type_id',
    type: 'dropdown',
    // required: true,
    defaultValue: '',
  },
  {
    name: 'salary_estimate',
    label: 'salary_estimate',
    type: 'number',
    // required: true,
    defaultValue: 0,
  },
  {
    name: 'hm_comment',
    label: 'hm_comment',
    type: 'multiline',
    // required: true,
    defaultValue: '',
  },
  {
    name: 'shr_comment',
    label: 'shr_comment',
    type: 'multiline',
    // required: true,
    defaultValue: '',
  },
  {
    name: 'adm_comment',
    label: 'adm_comment',
    type: 'multiline',
    // required: true,
    defaultValue: '',
  },
];

export default fieldsInquiry;
