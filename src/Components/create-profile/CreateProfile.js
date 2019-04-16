import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createInfo } from '../../actions/profileActions';

class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySocialInputs: false,
            handle: '',
            company: '',
            website: '',
            location: '',
            skills: '',
            githubusername: '',
            bio: '',
            twitter: '',
            facebook: '',
            linkedin: '',
            youtube: '',
            instagram: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const profileData = {
            handle: this.state.handle,
            company: this.state.company,
            website: this.state.website,
            location: this.state.location,
            status: this.state.status,
            skills: this.state.skills,
            githubusername: this.state.githubusername,
            bio: this.state.bio,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            youtube: this.state.youtube,
            instagram: this.state.instagram
        };

        this.props.createInfo(profileData, this.props.history);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors, displaySocialInputs } = this.state;

        let socialInputs;

        if (displaySocialInputs) {
            socialInputs = (
                <div>
                    <InputGroup
                        placeholder='Twitter URL'
                        name='twitter'
                        icon='fab fa-twitter'
                        value={this.state.twitter}
                        onChange={this.onChange}
                        error={errors.twitter}
                    />
                    <InputGroup
                        placeholder='Facebook URL'
                        name='facebook'
                        icon='fab fa-facebook'
                        value={this.state.facebook}
                        onChange={this.onChange}
                        error={errors.facebook}
                    />
                    <InputGroup
                        placeholder='LinkedIn URL'
                        name='linkedin'
                        icon='fab fa-linkedin'
                        value={this.state.linkedin}
                        onChange={this.onChange}
                        error={errors.linkedin}
                    />
                    <InputGroup
                        placeholder='YouTube URL'
                        name='youtube'
                        icon='fab fa-youtube'
                        value={this.state.youtube}
                        onChange={this.onChange}
                        error={errors.youtube}
                    />
                    <InputGroup
                        placeholder='Instagram URL'
                        name='instagram'
                        icon='fab fa-instagram'
                        value={this.state.instagram}
                        onChange={this.onChange}
                        error={errors.instagram}
                    />
                </div>
            )
        } else {

        }

        //drop down - select options
        //we can change all the fields to suit our needs for the profile later

        const options = [
            { label: '* Select Professional Status', value: 0 },
            { label: 'Developer', value: 'Developer' },
            { label: 'Junior Developer', value: 'Junior Developer' },
            { label: 'Senior Developer', value: 'Senior Developer' },
            { label: 'Manager', value: 'Manager' },
            { label: 'Student', value: 'Student' },
            { label: 'Teacher', value: 'Teacher' },
            { label: 'Intern', value: 'Intern' },
            { label: 'Other', value: 'Other' },
        ];
        return (
            <div className='create-profile'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 m-auto'>
                            <h1 className='display-4 text-center'>Create Your Profile</h1>
                            <p className='lead text-center'>
                                Some info about yourself
                            </p>
                            <small className='d-block pb-3'>* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    placeholder='* profile Handle'
                                    name='handle'
                                    value={this.state.handle}
                                    onChange={this.onChange}
                                    error={errors.handle}
                                    info='A unique handle for your profile'
                                />
                                <SelectListGroup
                                    placeholder='Status'
                                    name='status'
                                    value={this.state.status}
                                    onChange={this.onChange}
                                    error={errors.status}
                                    options={options}
                                    info='put something here instead of this text'
                                />
                                <TextFieldGroup
                                    placeholder='Company'
                                    name='company'
                                    value={this.state.company}
                                    onChange={this.onChange}
                                    error={errors.company}
                                    info='put something here instead of this text'
                                />
                                <TextFieldGroup
                                    placeholder='Website'
                                    name='website'
                                    value={this.state.website}
                                    onChange={this.onChange}
                                    error={errors.website}
                                    info='A unique handle for your profile'
                                />
                                <TextFieldGroup
                                    placeholder='Location'
                                    name='location'
                                    value={this.state.location}
                                    onChange={this.onChange}
                                    error={errors.location}
                                    info='A unique handle for your profile'
                                />
                                <TextFieldGroup
                                    placeholder='Skills'
                                    name='skills'
                                    value={this.state.skills}
                                    onChange={this.onChange}
                                    error={errors.skills}
                                    info='A unique handle for your profile'
                                />
                                <TextFieldGroup
                                    placeholder='Github UserName'
                                    name='githubusername'
                                    value={this.state.githubusername}
                                    onChange={this.onChange}
                                    error={errors.githubusername}
                                    info='A unique handle for your profile'
                                />
                                <TextAreaFieldGroup
                                    placeholder='Short Bio'
                                    name='bio'
                                    value={this.state.bio}
                                    onChange={this.onChange}
                                    error={errors.bio}
                                    info='Tell us a little about yourself!'
                                />

                                {/* toggle social Inputs */}
                                <div className='mb-3'>
                                    <button
                                    type='button'
                                    onClick={() => {
                                        this.setState(prevState => ({
                                            displaySocialInputs: !prevState.displaySocialInputs
                                        }))
                                    }} className='btn btn-light'>Add Social Network links</button>
                                    <span className='text-muted'>Optional</span>
                                </div>
                                {socialInputs}
                                <input type='submit' value='Submit' className='btn btn-info btn-block mt-4' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors

})

export default connect(mapStateToProps, { createInfo })(withRouter(CreateProfile));