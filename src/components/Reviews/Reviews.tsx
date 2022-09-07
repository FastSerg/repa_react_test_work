import React, { useState } from 'react'
import {
    Card,
    CardContent,
    Typography,
    TextField,
    TextareaAutosize,
    Button,
} from '@mui/material'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Jack',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi illum quidem, tempora sint laboriosam saepe blanditiis quasi dolor veritatis dolores. Rem atque quam impedit sint explicabo. Dolore adipisci veritatis temporibus!',
        },
        {
            name: 'Anna',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi illum quidem, tempora sint laboriosam saepe blanditiis quasi dolor veritatis dolores. Rem atque quam impedit sint explicabo. Dolore adipisci veritatis temporibus!',
        },
        {
            name: 'Bob',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi illum quidem, tempora sint laboriosam saepe blanditiis quasi dolor veritatis dolores. Rem atque quam impedit sint explicabo. Dolore adipisci veritatis temporibus!',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    console.log(reviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required')
        } else {
            setReviews((prevState: Review[]) => {
                return [...prevState, newReview]
            })
            setNewReview({ name: '', text: '' })
        }
    }
    return (
        <>
            <h2>Reviews</h2>
            {reviews.map((review: Review, i: number) => (
                <Card
                    variant="outlined"
                    style={{ margin: '20px 0', background: '##7e6e6' }}
                    key={i}
                >
                    <CardContent>
                        <Typography variant="h6">{review.name}</Typography>
                        <Typography variant="h6">{review.text}</Typography>
                    </CardContent>
                </Card>
            ))}

            <Card variant="outlined">
                <CardContent>
                    <form onSubmit={onSend}>
                        <Typography variant="h6">
                            Please leave a review
                        </Typography>
                        <div>
                            <TextField
                                size="small"
                                value={newReview.name}
                                onChange={handleChangeName}
                            ></TextField>
                        </div>
                        <br />
                        <TextareaAutosize
                            minRows={5}
                            value={newReview.text}
                            onChange={handleChangeText}
                        />
                        <div>
                            <Button type="submit">Leave review</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

export default Reviews
