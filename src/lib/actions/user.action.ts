"use server"
import User from '@/lib/models/user.models';
import {connect} from '@/lib/database';

export async function createUser(user: any) {
    try {
        await connect();
        const newUser = await User.create(user);

        return JSON.parse(JSON.stringify(newUser));
    
    } catch (error) {
        console.log('USER NOT CREATED');
    }
}