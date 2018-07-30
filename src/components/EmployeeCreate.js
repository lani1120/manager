import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="文哥"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="111-111-1111"
                    />
                </CardSection>
                <CardSection>
                    
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeCreate;