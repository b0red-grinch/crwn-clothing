import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuContainer from '../menu-container/menu-container.component';

import './directory-menu.styles.css';
import { DirectoryMenuContainer } from './directory-menu.styles';


const Directory = ({ sections }) => (
  
            <DirectoryMenuContainer>
                {
                    sections.map(({ id, ...otherSectionProps }) => (
                        <MenuContainer key={id} {...otherSectionProps} />
                    ))
                }

            </DirectoryMenuContainer>
        
)

const mapStatetoProps = createStructuredSelector({
sections: selectDirectorySections
})

export default connect(mapStatetoProps)(Directory);
