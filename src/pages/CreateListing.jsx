// import { useState, useEffect, useRef } from 'react'
// import { getAuth, onAuthStateChanged } from 'firebase/auth'
// import { useNavigate } from 'react-router-dom'
// import Spinner from '../components/Spinner/Spinner'

// const CreateListing = () => {
// 	const { loading, setLoading } = useState(false)
// 	const { formData, setFormData } = useState({
// 		type: 'rent',
// 		name: '',
// 		bedrooms: 1,
// 		bathrooms: 1,
// 		parking: false,
// 		furnished: false,
// 		address: '',
// 		offer: false,
// 		regularPrice: 0,
// 		discountedPrice: 0,
// 		images: {},
// 		latitude: 0,
// 		longitude: 0,
// 	})
// 	const {
// 		type,
// 		name,
// 		bedrooms,
// 		bathrooms,
// 		parking,
// 		furnished,
// 		address,
// 		offer,
// 		regularPrice,
// 		images,
// 		latitude,
// 		longitude,
// 	} = formData

// 	const auth = getAuth()
// 	const navigate = useNavigate()
// 	const isMounted = useRef(true)
// 	useEffect(() => {
// 		if (isMounted) {
// 			onAuthStateChanged(auth, user => {
// 				if (user) {
// 					setFormData({ ...formData, userRef: user.uid })
// 				} else {
// 					navigate('/')
// 				}
// 			})
// 		}
// 		return () => {
// 			isMounted.current = false
// 		}
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [isMounted])

// 	if (loading) {
// 		return <Spinner />
// 	}

// 	return <div>Create-Listing</div>
// }

// export default CreateListing

import React, { useState, useEffect, useRef } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner/Spinner'
const CreateListing = () => {
	const [loading, setLoading] = useState(false)
	const [geolocationEnabled, setGeolocationEnabled] = useState(true)
	const [formData, setFormData] = useState({
		type: 'rent',
		name: '',
		bedrooms: 1,
		bathrooms: 1,
		parking: false,
		furnished: false,
		address: '',
		offer: false,
		regularPrice: 0,
		discountedPrice: 0,
		images: {},
		latitude: 0,
		longitude: 0,
	})
	const {
		type,
		name,
		bedrooms,
		bathrooms,
		parking,
		furnished,
		address,
		offer,
		regularPrice,
		discountedPrice,
		images,
		latitude,
		longitude,
	} = formData

	const auth = getAuth()
	const navigate = useNavigate()
	const isMounted = useRef(true)

	useEffect(() => {
		if (isMounted) {
			onAuthStateChanged(auth, user => {
				if (user) {
					setFormData({ ...formData, userRef: user.uid })
				} else {
					navigate('/sing-in')
				}
			})
		}
		return () => {
			isMounted.current = false
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMounted])

	if (loading) {
		return <Spinner />
	}
	const onSubmit = e => {
		e.preventDefault()
	}

	const onMutate = e => {
		console.log(e)
	}

	return (
		<div className='profile'>
			<header>
				<p className='pageHeader'>Create Listing</p>
			</header>
			<main>
				<form onSubmit={onSubmit}>
					<label className='formLabel'>Sell / Rent</label>
					<div className='formButtons'>
						<button
							type='button'
							id={type}
							value='sell'
							className={type === 'sale' ? 'formButtonActive' : 'formButton'}
							onClick={onMutate}
						>
							Sell
						</button>
						<button
							type='button'
							id={type}
							value='rent'
							className={type === 'rent' ? 'formButtonActive' : 'formButton'}
							onClick={onMutate}
						>
							Rent
						</button>
					</div>
				</form>
			</main>
		</div>
	)
}

export default CreateListing
