/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, Alert, ScrollView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Left, Icon, Body, Title, Right } from 'native-base';
import Config from './Config';
import firebase from 'firebase';
import ImagePicker from 'react-native-image-crop-picker';
import RNFetchBlob from 'react-native-fetch-blob';


const Blob = RNFetchBlob.polyfill.Blob;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob;

export default class InsertFrom extends Component {


    constructor() {
        super();


        this.state = {
            manufactor: '',
            model: '',
            year: '',
            gearbox: '',
            pricePerDay: '',
            fuel: '',
            image1: null,
            image2: null,
            image3: null,
            image1url: null,
            image2url: null,
            image3url: null,
            name: '',
            phone: '',
            email: '',
            adress: '',
            id: '',
            key: ''

        };
    }

    onFromGalleryPress() {
        if (this.state.image1 != null && this.state.image2 != null && this.state.image3 != null) {
            Alert.alert("Ask your father to select more than 3 photos");
            return;
        }
        var self = this;
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true
        }).then(image => {
            if (this.state.image1 == null) {
                this.setState({
                    image1: image
                });
            }
            else if (this.state.image2 == null) {
                this.setState({
                    image2: image
                });
            }
            else if (this.state.image3 == null) {
                this.setState({
                    image3: image
                });
            }
            //self.uploadImage(image, self.generateRandomFileName());
        }).catch(err => {
            throw err;
            console.log(err);
        });
    }

    onFromCameraPress() {
        if (this.state.image1 != null && this.state.image2 != null && this.state.image3 != null) {
            Alert.alert("Ask your father to select more than 3 photos");
            return;
        }
        var self = this;
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true
        }).then(image => {
            if (this.state.image1 == null) {
                this.setState({
                    image1: image
                });
            }
            else if (this.state.image2 == null) {
                this.setState({
                    image2: image
                });
            }
            else if (this.state.image3 == null) {
                this.setState({
                    image3: image
                });
            }
            //self.uploadImage(image, self.generateRandomFileName());
        }).catch(err => {
            throw err;
            console.log(err);
        });
    }

    uploadImage(image, fileName) {

        var storageRef = firebase.storage().ref("myImages");

        var extension = "";
        switch (image.mime) {
            case "image/jpeg":
                extension = ".jpg";
                break;
            case "image/png":
                extension = ".png";
                break;
        }

        fileName += extension;
        var u = 'urlja';

        var fileRef = storageRef.child(fileName);

        var self = this;

            Blob.build(image.data, { type: image.mime + ';base64' })
                .then((blob) => {
                    fileRef.put(blob, { contentType: image.mime }).then(function (snapshot) {
                        fileRef.getDownloadURL().then(url => {
                            Alert.alert("download url: "+url)
                        });
                    });
                }).catch((err) => {
                    console.log(err);
                    Alert.alert("Error while uploading");
                });
    }

    setImageUrl(fileRef) {
        fileRef.getDownloadURL().then(url => {
            self.setState({
                image1url: url,
            });
        }).catch(function (err) {
            Alert.alert("Error while getting downloadUrl");
        });
        Alert.alert(this.state.image1url);
    }

    generateRandomFileName() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    onManufactorChanged(val) {
        this.setState({
            manufactor: val
        });
    }

    onModelChanged(val) {
        this.setState({
            model: val
        });
    }

    onYearChanged(val) {
        this.setState({
            year: val
        });
    }

    onGearboxChanged(val) {
        this.setState({
            gearbox: val
        });
    }

    onPricePerDayChanged(val) {
        this.setState({
            pricePerDay: val
        });
    }

    onfuelChanged(val) {
        this.setState({
            fuel: val
        });
    }

    onImagesChanged(val) {
        this.setState({
            images: val
        });
    }

    onNameChanged(val) {
        this.setState({
            name: val
        });
    }

    onPhoneChanged(val) {
        this.setState({
            phone: val
        });
    }

    onEmailChanged(val) {
        this.setState({
            email: val
        });
    }

    onAdressChanged(val) {
        this.setState({
            adress: val
        });
    }
    onSubmitPressed() {

        if (this.state.manufactor.trim() == '') {
            Alert.alert("Error", "You must enter a manufactor!");
            return;
        }

        if (this.state.model.trim() == '') {
            Alert.alert("Error", "You must enter a Model!");
            return;
        }

        if (this.state.year.trim() == '') {
            Alert.alert("Error", "You must enter a year!");
            return;
        }

        if (this.state.gearbox.trim() == '') {
            Alert.alert("Error", "You must enter a gearbox!");
            return;
        }

        if (this.state.pricePerDay.trim() == '') {
            Alert.alert("Error", "You must enter a price per day!");
            return;
        }

        if (this.state.fuel.trim() == '') {
            Alert.alert("Error", "You must enter a fuel!");
            return;
        }

        if (this.state.name.trim() == '') {
            Alert.alert("Error", "You must enter a name!");
            return;
        }

        if (this.state.phone.trim() == '') {
            Alert.alert("Error", "You must enter a phone!");
            return;
        }

        if (this.state.email.trim() == '') {
            Alert.alert("Error", "You must enter an email!");
            return;
        }

        if (this.state.adress.trim() == '') {
            Alert.alert("Error", "You must enter a adress!");
            return;
        }

        for (let i = 0; i < 3; i++) {
            if (i === 0) {
                this.uploadImage(this.state.image1, this.generateRandomFileName());

            }
            else if (i === 1) {
                this.uploadImage(this.state.image2, this.generateRandomFileName());
            }
            else if (i === 2) {
                this.uploadImage(this.state.image3, this.generateRandomFileName());
            }
        }


        var rootRef = firebase.database().ref('RentACarDB'); // Empty parameters == root reference
        var pushID = rootRef.push().getKey();
        var newNode = rootRef.child(this.state.manufactor + this.state.model + pushID).set({
            id: this.state.manufactor + this.state.model + pushID,
            manufactor: this.state.manufactor,
            model: this.state.model,
            year: this.state.year,
            gearbox: this.state.gearbox,
            pricePerDay: this.state.pricePerDay,
            fuel: this.state.fuel,
            key: pushID
        }, () => {

        });

        var newNode2 = firebase.database().ref(`/RentACarDB/${this.state.manufactor + this.state.model + pushID}`).child('Company').set({
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            adress: this.state.adress

        }, () => {

        });
        var newNode3 = firebase.database().ref(`/RentACarDB/${this.state.manufactor + this.state.model + pushID}`).child('images').set({
            image1: "http://www.blackstonems.com/photo/4/l_495fa48d942693d79d5f4573161b62f6.jpg",
            image2: "http://www.blackstonems.com/photo/4/l_495fa48d942693d79d5f4573161b62f6.jpg",
            image3: "http://www.blackstonems.com/photo/4/l_495fa48d942693d79d5f4573161b62f6.jpg",
            thumbnail: "http://www.blackstonems.com/photo/4/l_495fa48d942693d79d5f4573161b62f6.jpg"
        },
            () => {
                // Ky funksion thirret kur push kryhet me sukses
                Alert.alert("Car successfully inserted! Car ID is " + this.state.manufactor + this.state.model);

                this.resetFields();
            });



        // Saving data - https://firebase.google.com/docs/database/admin/save-data
        // =========================================================================================
        // push -> shto nyje te re ne liste me ID automatikisht te gjeneruar
        // set -> krijo nyje ne nje path te caktuar (e zevendeson komplet objektin, nese ndodhet dicka aty paraprakisht)
        // update -> update nje nyje ekzistuese pjeserisht (nuk e zevendeson komplet objektin)
        // =========================================================================================
    }

    resetFields() {
        this.setState({
            manufactor: '',
            model: '',
            year: '',
            gearbox: '',
            pricePerDay: '',
            fuel: '',
            images: '',
            name: '',
            image1: null,
            image2: null,
            image3: null,
            image1url: null,
            image2url: null,
            image3url: null,
            phone: '',
            email: '',
            adress: '',
            id: ''
        });
    }

    render() {
        return (
            <Container>
                <Header >
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('Profile')}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Insert a new car</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <ScrollView>
                        <Form>
                            <Item stackedLabel>
                                <Label>Manufactor: </Label>
                                <Input onChangeText={this.onManufactorChanged.bind(this)} value={this.state.manufactor} />
                            </Item>

                            <Item stackedLabel>
                                <Label>Model</Label>
                                <Input onChangeText={this.onModelChanged.bind(this)} value={this.state.model} />
                            </Item>

                            <Item stackedLabel>
                                <Label>Year</Label>
                                <Input onChangeText={this.onYearChanged.bind(this)} value={this.state.year} />
                            </Item>

                            <Item stackedLabel>
                                <Label>Gearbox</Label>
                                <Input onChangeText={this.onGearboxChanged.bind(this)} value={this.state.gearbox} />
                            </Item>

                            <Item stackedLabel>
                                <Label>Price per Day</Label>
                                <Input onChangeText={this.onPricePerDayChanged.bind(this)} value={this.state.pricePerDay} />
                            </Item>

                            <Item stackedLabel>
                                <Label>Fuel </Label>
                                <Input onChangeText={this.onfuelChanged.bind(this)} value={this.state.fuel} />
                            </Item>

                            <Item stackedLabel>
                                <Label>Name</Label>
                                <Input onChangeText={this.onNameChanged.bind(this)} value={this.state.name} />
                            </Item>

                            <Item stackedLabel>
                                <Label>Phone</Label>
                                <Input onChangeText={this.onPhoneChanged.bind(this)} value={this.state.phone} />
                            </Item>

                            <Item stackedLabel last>
                                <Label>Email</Label>
                                <Input onChangeText={this.onEmailChanged.bind(this)} value={this.state.email} />
                            </Item>

                            <Item stackedLabel>
                                <Label>Adress</Label>
                                <Input onChangeText={this.onAdressChanged.bind(this)} value={this.state.adress} />
                            </Item>


                            <View Style={{ flex: 1, flexdirection: 'row' }}>
                                <Button onPress={this.onFromCameraPress.bind(this)}  >
                                    <Text>Take image1</Text>
                                </Button>
                            </View>

                            <Button block onPress={this.onSubmitPressed.bind(this)} style={style.submitButton}>
                                <Text>Submit</Text>
                            </Button>

                        </Form>
                    </ScrollView>

                </Content>
            </Container>
        );
    }

}
const style = {
    submitButton: {
        margin: 15
    }
}