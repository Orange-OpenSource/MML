/*
 * Copyright (C) 2018 - 2019 Orange
 * 
 * This software is distributed under the terms and conditions of the 'MIT'
 * license which can be found in the file 'LICENSE.txt' in this package distribution 
 * or at https://spdx.org/licenses/MIT
 *
 */

 /* Orange contributed module for use on CozyCloud platform
 * 
 * Module name: MML - Mapping My Life
 * Version:     1.0.5
 * Created:     2018 by Orange
 */


/**
  Redux actions constants
**/

// index using cozy-stack mango
export const INDEX_GEOLOCATIONS_BY_DATE = 'INDEX_GEOLOCATIONS_BY_DATE'
export const INDEX_GEOLOCATIONS_BY_DATE_SUCCESS = 'INDEX_GEOLOCATIONS_BY_DATE_SUCCESS'
export const INDEX_PHONECALLS_BY_DATE = 'INDEX_PHONECALLS_BY_DATE'
export const INDEX_PHONECALLS_BY_DATE_SUCCESS = 'INDEX_PHONECALLS_BY_DATE_SUCCESS'
export const INDEX_FAVORISPOINT = 'INDEX_FAVORISPOINT'
export const INDEX_FAVORISPOINT_SUCCESS = 'INDEX_FAVORISPOINT_SUCCESS'
export const CREATE_INDEX_FAILURE = 'CREATE_INDEX_FAILURE'
// fetch geolocations
export const FETCH_GEOLOCATIONS = 'FETCH_GEOLOCATIONS'
export const RECEIVE_GEOLOCATIONS = 'RECEIVE_GEOLOCATIONS'
export const FETCH_GEOLOCATIONS_FAILURE = 'FETCH_GEOLOCATIONS_FAILURE'
export const FETCH_GEO_LAST_DAY = 'FETCH_GEO_LAST_DAY'

// select date
export const SELECT_DATE = 'SELECT_DATE'

// fetch phonecalls
export const RECEIVE_PHONECALLS = 'RECEIVE_PHONECALLS'
export const FETCH_PHONECALLS_FAILURE = 'FETCH_PHONECALLS_FAILURE'

// fetch top points
export const RECEIVE_TOP_GEOLOCATIONS = 'RECEIVE_TOP_GEOLOCATIONS'
export const RECEIVE_TOP_PHONECALLS = 'RECEIVE_TOP_PHONECALLS'
export const RECEIVE_FAVORISPOINT = 'RECEIVE_FAVORISPOINT'
// fetch favoris point
export const FETCH_FAVORISPOINT_FAILURE = 'FETCH_FAVORISPOINT_FAILURE'
// export const ADD_FAVORIS_TYPE_MAP = 'ADD_FAVORIS_TYPE_MAP'
// export const ADD_FAVORIS_ID_MAP = 'ADD_FAVORIS_ID_MAP'
// export const UPDATE_FAVORIS_TYPE_MAP = 'UPDATE_FAVORIS_TYPE_MAP'
// export const UPDATE_FAVORIS_ID_MAP = 'UPDATE_FAVORIS_ID_MAP'
// export const DELETE_FAVORIS_TYPE_MAP = 'DELETE_FAVORIS_TYPE_MAP'
// export const DELETE_FAVORIS_ID_MAP = 'DELETE_FAVORIS_ID_MAP'
export const ADD_FAVORIS_MAP = 'ADD_FAVORIS_MAP'
export const UPDATE_FAVORIS_MAP = 'UPDATE_FAVORIS_MAP'
export const DELETE_FAVORIS_MAP = 'DELETE_FAVORIS_MAP'

export const FETCH_ITINERARY = 'FETCH_ITINERARY'
